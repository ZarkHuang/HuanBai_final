/* 運作在3344port */
const express = require("express");
const app = express();
const session = require('express-session');
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 跨域存取是否開放 */
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["get", "post", "PUT", "delete"],
    credentials: true,
}

));
/* 使用session以及其限制 */
app.use(session({
    name: "EdiosnHi",
    secret: "thisisediosnwumade",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 60 * 60 * 1000,
    }


}))


/* 確認你是登入狀態的session api */
function loginApi(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.end("操作時間過期，請重新登入");

    }
}
/* 連接mysql狀態 */
var mysql = require("mysql");
const { json } = require("express");
var conn = mysql.createConnection({
    user: "admin",
    password: "2023mfee32",
    host: "database-1.cyesh0vsjjcs.ap-northeast-1.rds.amazonaws.com",
    port: 3306,
    database: "mfee32",
    multipleStatements: true
});
conn.connect(function (err) {
    console.log(err)
})




/* 創造會員確認帳號有無使用過 */
app.post("/member/signupcheckname", function (req, res) {
    conn.query("select * from userInfo where account = ?", [req.body.account], function (err, rows) {
        if (rows == "") {
            res.send("success")
        } else {
            res.send("gowrong")
        }
    })
})


/* 確認會員密碼有無創建過 */
app.post("/member/signupcheckpassword", function (req, res) {
    conn.query("select * from userInfo where password = ?", [req.body.password], function (err, rows) {
        if (rows == "") {
            res.send("success")
        } else {
            res.send("gowrong")
        }
    })
})

/*  確認信箱是否被註冊過 */
app.post("/member/signupcheckemail", function (req, res) {
    conn.query("select * from userInfo where userEmail = ?", [req.body.userEmail], function (err, rows) {
        if (rows == "") {
            res.send("success")
        } else {
            res.send("gowrong")
        }
    })
})



/* 註冊頁面modal版本 將前端資料送往資料庫 */
app.post("/member/signup",function(req,res){
    bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
        conn.query("insert into userInfo (account,password,userEmail) values (?,?,?)",
            [req.body.account, hash, req.body.userEmail], function (err, rows) {
                console.log("收到" + req.body);
                if (err) {
                    console.log(err);
                } else {
                    console.log("sussceeeeeee")
                }
                console.log(req.body)
                res.send(JSON.stringify(req.body))
            })
    })

})

/* 註冊頁面 仔細版本 */
app.post("/member/goSignUp",function(req,res){
    bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
        conn.query("insert into userInfo (account,password,userEmail,userAddress,userName,userGender,userTelephone,userBirth) values (?,?,?,?,?,?,?,?)",
        [req.body.account, hash, req.body.userEmail,req.body.userAddress,req.body.userName,req.body.userGender,req.body.userTelephone,req.body.userBirth],function(err,rows){
        console.log("收到"+req.body);
        if(err){
            console.log(err);
        }else{
            console.log("sussceeeeeee")
        }
        console.log(req.body)
        res.send(JSON.stringify(req.body))
    })
    })
   
})


/* 登入使用 創建session */
app.post("/member/gologin", function (req, res) {
    conn.query('update userInfo set userUpdateT = now() where account = ?;select * from userInfo where account = ?',
        [req.body.account, req.body.account], function (err, rows) {

            console.log(0, "這是你輸入的帳號", req.body.account)
            console.log(1, "查詢是否有相符結果", rows)


            if (rows[1][0] !== undefined) {

                console.log(2, "有相符的帳號接下來驗證帳號與密碼是否相同 以下是你輸入的帳號密碼", req.body.account + req.body.password)



                bcrypt.compare(req.body.password, rows[1][0].password, (error, corret) => {
                    if (corret) {
                        console.log(3, "配對密碼與資料庫密碼是否相同", corret);
                        req.session.user = {
                            uid: rows[1][0].uid,
                            account: rows[1][0].account,
                            password: rows[1][0].password,
                            userUpdateT: rows[1][0].userUpdateT
                        };
                        console.log(4, "密碼配對相同 把sessio紀錄進來  以下是session資訊", req.session.user)
                        console.log(5, "準備回傳資料給前端來完成登錄")
                        res.send("ya");
                        console.log(12133)
                    } else {
                        console.log(90, "比對密碼失敗回傳給前端錯誤訊息", error)
                        res.send("wrongpair")
                    }
                })

            } else {
                console.log(100, "帳號就錯誤了回傳給前端")
                res.send("noname")
            }
        })
})


/* 確認你有沒有登入 */
app.get("/checkAuth", function (req, res) {
    if (req.session.user) {
        res.send("登入中 user:" + req.session.user)
    } else {
        res.send("尚未登入")
    }
})
















/* 會員資料 取得資料庫內的資料 */
app.get("/member/memberData", loginApi, function (req, res) {
    console.log(999, req.session);
    conn.query("select * from userInfo where account =? and password =?", [req.session.user.account, req.session.user.password], function (err, rows) {
        //console.log(234,req.session.user.account,req.session.user.password)
        console.log(1000, rows[0]);

        if (rows[0].userBirth != null) {
            var d = rows[0].userBirth
            var years = d.getFullYear();
            var months = d.getMonth() + 1;
            if (months < 10) {
                months = "0" + months;
            }
            var days = d.getDate();
            if (days < 10) {
                days = "0" + days
            }
            var r_date = years + "-" + months + "-" + days;
            rows[0].userBirth = r_date

        }
        console.log(1003, rows[0].userBirth)

        res.send(JSON.stringify(rows[0]));//使用rows[0] rows都可以 因為只有一列
    })
})


/* 會員資料  往資料庫丟資料進去更新 */
app.put('/member/memberData', loginApi, function (req, res) {
    conn.query("update userInfo set userName =?, userEmail = ?,userGender= ?,userTelephone=?,userAddress=?,userBirth=? where uid =?",
        [req.body.userName, req.body.userEmail, req.body.userGender, req.body.userTelephone, req.body.userAddress, req.body.userBirth, req.body.uid],
        function (err, rows) {
            console.log(777, req.body)
            res.send(JSON.stringify(req.body));
        })
})



/* 更改密碼 往資料庫傳遞做更改 */
app.put("/member/changepassword", loginApi, function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        conn.query("update userInfo set password = ? where uid = ?", [hash, req.session.user.uid], function (err, rows) {
            res.send(JSON.stringify(req.body));
        })


    })
})

/* 更改密碼 往前端傳遞密碼資訊 */
app.get("/member/changepassword", loginApi, function (req, res) {
    conn.query("select * from userInfo where account = ? and uid =?", [req.session.user.account, req.session.user.uid], function (err, rows) {
        res.send(JSON.stringify(rows[0]));
    })
})




/* 新增資料 */
/* app.post("/member/create",function(req,res){
    conn.query("insert into userInfo (account,password,userEmail,userAddress,userTelephone,userGender) values (?, ?, ?, ?, ?, ?)",
    [
    req.body.account,
    req.body.password,
    req.body.userEmail,
    req.body.userAddress,
    req.body.userTelephone,
    req.body.userGender
    ],function(err,rows){
        console.log("3344收到"+req.body.account);
        if(err){
            console.log("傳不進去拉幹");
            console.log(err)
        }else{
            console.log("成功囉")
        }
        res.send(JSON.stringify(req.body));
    })
    }
) */



// get所有投票內容
app.get("/vote", (req, res) => {
    const q = "SELECT * FROM `votes`"
    conn.query(q, (err, data) => {
        if (err) return res.json(err) // 失敗回傳什麼
        return res.json(data)           // 成功回傳交換回來的資料

    })
})

// get 單一個，投票內容
app.get("/vote/:voteId", (req, res) => {

    const q = "SELECT * FROM votes WHERE voteId = ?"
    conn.query(q,
        [req.params.voteId],
        (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        });
})

// 更改投票票數的 origin
// INSERT INTO userVote (uid, voteId, userName) VALUES (1, 1, '蘋果哥哥');
// 增加資料到userVote
app.post('/updateOption1', (req, res) => {
    const option1 = req.body.option;
    const voteId = req.body.voteId;

    conn.query('UPDATE votes SET numberOfOption1 = numberOfOption1 + 1 WHERE voteId = ?',
        [voteId], (err, data) => {

            if (err) return res.json(err); // 失敗回傳什麼
            return res.json(data);            // 成功回傳交換回來的資料
        });

});






app.post('/updateOption2', (req, res) => {
    const option2 = req.body.option;
    const voteId = req.body.voteId;

    conn.query('UPDATE votes SET numberOfOption2 = numberOfOption2 + 1 WHERE voteId = ? ',
        [voteId], (err, data) => {
            if (err) return res.json(err); // 失敗回傳什麼
            return res.json(data);            // 成功回傳交換回來的資料
        });
});

app.post('/updateOption3', (req, res) => {
    const option3 = req.body.option;
    const voteId = req.body.voteId;

    conn.query('UPDATE votes SET numberOfOption3 = numberOfOption3 + 1 WHERE voteId = ? ',
        [voteId], (err, data) => {
            if (err) return res.json(err); // 失敗回傳什麼
            return res.json(data);            // 成功回傳交換回來的資料
        });
});

app.post('/updateOption4', (req, res) => {
    const option4 = req.body.option;
    const voteId = req.body.voteId;

    conn.query('UPDATE votes SET numberOfOption4 = numberOfOption4 + 1 WHERE voteId = ? ',
        [voteId], (err, data) => {
            if (err) return res.json(err); // 失敗回傳什麼
            console.log("data:", data)
            return res.json(data);            // 成功回傳交換回來的資料

        });
});


// 顯示投票結果的
app.get("/vote/answer/:voteId", (req, res) => {

    const q = "SELECT * FROM votes WHERE voteId = ?"
    conn.query(q,
        [req.params.voteId],
        (err, data) => {
            if (err) return res.json(err);
            const voteData = data[0];  // 取得第一筆資料，即該投票資料
            const totalVotes = voteData.numberOfOption1 + voteData.numberOfOption2 + voteData.numberOfOption3 + voteData.numberOfOption4;
            const percentage1 = (voteData.numberOfOption1 / totalVotes * 100).toFixed(0);
            const percentage2 = (voteData.numberOfOption2 / totalVotes * 100).toFixed(0);
            const percentage3 = (voteData.numberOfOption3 / totalVotes * 100).toFixed(0);
            const percentage4 = (voteData.numberOfOption4 / totalVotes * 100).toFixed(0);
            return res.json({
                data,
                totalVotes,
                percentage1,
                percentage2,
                percentage3,
                percentage4
            });
        });
})

app.get("/voteData", (req, res) => {
    const q = "SELECT * FROM `userVote`"
    conn.query(q, (err, data) => {
        if (err) return res.json(err) // 失敗回傳什麼
        return res.json(data)           // 成功回傳交換回來的資料

    })
    q = 'SELECT voteTopic, userName FROM votes v JOIN options o ON v.voteId = o.voteId WHERE v.voteId = ?'
    conn.query(q, [voteId], (err, results) => {
        if (err) throw err;
        console.log(results);
        // 在這裡處理查詢結果
    });
})










app.listen(3344, function () {
    console.log("i'm listen to port3344!")
});

