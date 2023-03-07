import React, { useEffect, useState, useRef } from "react";
import { useMap } from 'react-leaflet/hooks'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faPlus, faMinus, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, } from "react-leaflet"; //地圖
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import MarkerClusterGroup from 'react-leaflet-cluster';
import useGeoLocation from "./map/useGeoLocation";
import '../style/map/map.scss'
import Totop from './News/ScrollToTop'

//圖片
import iconSeven from "../img/map/ico-711.svg";
import iconMcd from "../img/map/ico-mcdonald.svg";
import iconMos from "../img/map/ico-mos.svg";
import icoKfc from "../img/map/ico-KFC.svg";
import icoStb from "../img/map/ico-starbuck.svg";
import icoFamily from "../img/map/ico-family.svg";
import icoHiLife from "../img/map/ico-hiLife.svg";
import icoUcup from "../img/map/ico-uCup.svg";

function Test({ latLong }) {
    const myMarkerIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    let map = useMap();
    let x = latLong.lat;
    let y = latLong.long
    if (y) map.flyTo([x, y], 17);
}
function Map() {
    const [data, setData] = useState([]);
    const [city, setCity] = useState(["台北市", "基隆市", "新北市", "宜蘭縣", "桃園市", "新竹市", "新竹縣", "苗栗縣", "台中市", "彰化縣", "嘉義市", "雲林縣", "台南市", "高雄市", "屏東縣", "花蓮縣"]);
    const [area, setArea] = useState([]);
    const [store, setStore] = useState([]);
    const [card, setCard] = useState({});
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");
    const [latLong, setLatLong] = useState("");
    const [weatherData, setWeatherData] = useState([]);
    const [map, setMap] = useState([]);//地圖
    const location = useGeoLocation(); //改版前
    const mapRef = useRef("map");
    const [num, setNum] = useState([]);//數量

    //自己的icon
    const myMarkerIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
    //初始化
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/DavidWang85/circularCupsJSON/main/storeMap.json")
            .then((response) => {
                setData([...response.data]);
                setMap([...response.data]);
                setNum([[], [...response.data]])
                setCard({
                    ...card,
                    city: "",
                    area: "",
                    store: "",
                });
            })
    }, []);
    //取得地區列表
    const getArea = () => {
        const cityValue = document.querySelector('#inputCity');
        const areaValue = document.querySelector("#inputArea");
        const storeValue = document.querySelector("#inputStore");
        areaValue.value = "";
        storeValue.value = "";
        const NewCity = data.filter((item) => {
            return cityValue.value === item.city
        })
        console.log(NewCity)
        setNum([...[], NewCity])
        //讓地區名稱不重複並組成新陣列
        var filterArea = NewCity.map(function (item) {
            return item.area
        }).filter(function (area, index, arr) {
            return arr.indexOf(area) === index;
        });
        setArea([...filterArea]);
        setCard({
            ...card,
            city: cityValue.value,
            area: "",
            store: "",
        })
    }
    console.log("數量", num)
    //取得店家列表
    const getStore = () => {
        const cityValue = document.querySelector('#inputCity');
        const areaValue = document.querySelector("#inputArea");
        const storeValue = document.querySelector("#inputStore");
        storeValue.value = "";
        const NewArea = data.filter((item) => {
            return cityValue.value === item.city && areaValue.value === item.area
        })
        setNum([...[], NewArea])
        //讓店家名稱不重複並組成新陣列
        var filterStore = NewArea.map(function (item) {
            return item.company
        }).filter(function (store, index, arr) {
            return arr.indexOf(store) === index;
        });
        setStore([...filterStore]);
        setCard({
            ...card,
            area: areaValue.value,
            store: "",
        })
    }
    //取得品牌名稱
    const getCupValue = () => {
        const cityValue = document.querySelector('#inputCity');
        const areaValue = document.querySelector("#inputArea");
        const storeValue = document.querySelector("#inputStore");
        const NewArea = storeValue.value;
        const NewStore = data.filter((item) => {
            return cityValue.value === item.city && areaValue.value === item.area && storeValue.value === item.company
        })
        setNum([...[], NewStore])
        setCard({
            ...card,
            store: NewArea,
        })
    }
    //前往指定商店位置
    const goToLocation = (e) => {
        e.preventDefault();
        let { long, lat } = e.target.dataset;
        setLatLong({ ...latLong, long: lat, lat: long })
        getWeather(long, lat); //到時候要打開
    }
    //天氣報報(到時候要打開goToLocation裡面的getWeather)
    const getWeather = (long, lat) => {
        let weatherMapgogo = "eb6040a528867e4773276cdd8a83bfb1";
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var weather = JSON.parse(this.responseText);
            setWeatherData([...[weather]])
        }
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${long}&lon=${lat}&appid=${weatherMapgogo}&units=metric&lang=zh_tw`, true)
        xhr.send()
    }
    //前往目前位置
    const getMyLocation = () => {
        if (location.loaded && !location.error) {
            setLatLong({ ...latLong, long: location.coordinates.lng, lat: location.coordinates.lat })
        } else {
            alert(location.error.message)
        }
    }

    return (
        <div className="mapWrap" id="mapWrap">
            <Totop/>
            <h3 className="text-center mt-4  map-subTitle">Circular Cups Map</h3>
            <h2 className="text-center map-title mt-1">循環杯地圖</h2>
            <div className="map-container position-relative mt-4 map-border p-0">
                <MapContainer
                    style={{ width: "100%", height: "100vh" }}
                    center={[24.1447816, 120.6766283]}
                    zoom={16}
                    zoomControl={false}
                    whenCreated={setMap}
                    ref={mapRef}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MarkerClusterGroup
                        chunkedLoading
                    >
                        {map.map((item, i) => {
                            var sevenIcon = new L.Icon({
                                iconUrl: iconSeven,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var mosIcon = new L.Icon({
                                iconUrl: iconMos,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var mcdIcon = new L.Icon({
                                iconUrl: iconMcd,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var kfcIcon = new L.Icon({
                                iconUrl: icoKfc,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var stbIcon = new L.Icon({
                                iconUrl: icoStb,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var familyIcon = new L.Icon({
                                iconUrl: icoFamily,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var hiLifeIcon = new L.Icon({
                                iconUrl: icoHiLife,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            var uCupIcon = new L.Icon({
                                iconUrl: icoUcup,
                                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                                iconSize: [60, 55],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41]
                            });
                            if (map[i].cupName === "好盒器") {
                                map[i].cupNameColor = "good-style"
                            } else if (map[i].cupName === "OPENiECO") {
                                map[i].cupNameColor = "open-style"
                            } else if (map[i].cupName === "塑還真") {
                                map[i].cupNameColor = "plastic-style"
                            } else if (map[i].cupName === "uCup") {
                                map[i].cupNameColor = "ucup-style"
                            } else {
                                map[i].cupNameColor = "other-style"
                            }
                            var mark;
                            if (map[i].company === "7-11") {
                                mark = sevenIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={sevenIcon}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "麥當勞") {
                                mark = mcdIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "摩斯漢堡") {
                                mark = mosIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "肯德基") {
                                mark = kfcIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "星巴克") {
                                mark = stbIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "全家") {
                                mark = familyIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "萊爾富") {
                                mark = hiLifeIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                            else if (map[i].company === "其他") {
                                mark = uCupIcon;
                                return (
                                    <Marker position={[item.long, item.lat]} key={item.name} icon={mark}>
                                        <Popup>
                                            <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                            <p>{item.name}</p>
                                            <p>電話： <a className="mark-link" href={`tel:${item.tel}`}>{item.tel}</a></p>
                                            <p>地址：<a className="mark-link" target="_blank" rel="noreferrer noopener" href={`https://www.google.com/maps/place/${item.name}`}>{item.address}</a></p>
                                            <p>店家：{item.company}</p>
                                        </Popup>
                                    </Marker>
                                )
                            }
                        })}
                    </MarkerClusterGroup>
                    <button type="button" onClick={getMyLocation} className="btn btn-light py-1 btn-sm shadow  getMyLocationBtn" id="getMyLocationBtn" data-bs-toggle="tooltip" data-bs-placement="right" title="定位比較慢 點擊後請稍等">
                        <i><FontAwesomeIcon icon={faLocationArrow} /></i>
                    </button>
                    <ZoomControl position="topright" zoomInText="+" zoomOutText="-"></ZoomControl>
                    {location.loaded && !location.error && (
                        <Marker icon={myMarkerIcon} position={[location.coordinates.lat, location.coordinates.lng]}>
                            <Popup className="text-primary">
                                這是你目前的位置
                                <br />找找附近的循環杯站點吧～
                            </Popup>
                        </Marker>
                    )}
                    <Test lat={lat} long={long} latLong={latLong} />
                </MapContainer>
                <input type="checkbox" id="sideMenu-active" />
                <div className="sideMenu">
                    <div className="w-100 map-bg-primary pt-3 pb-3">
                        <form action="" className="input-group w-75 mx-auto">
                            <div id="weather">
                                {
                                    (() => {
                                        return weatherData == "" ? <><p className="m-0 text-dark">氣溫：</p>
                                            <p className="m-0 text-dark">天氣狀況：</p>
                                            <img className="w-50" src="https://openweathermap.org/img/wn/50d@2x.png" alt="" /></> :
                                            <></>
                                    })()
                                }
                                {
                                    weatherData.map((item) => {
                                        return (
                                            <div key={item.id}>
                                                <p className="m-0 text-dark">氣溫：{item.main.temp_min} ~ {item.main.temp_max}</p>
                                                <p className="m-0 text-dark">天氣狀況：{item.weather[0].description}</p>
                                                <img className="w-50" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <select id="inputCity" onChange={getArea} className="form-select form-select-sm w-75">
                                <option value="">--選擇縣市--</option>
                                {
                                    city.map((city, i) => {
                                        return (
                                            <option value={city} key={i}>{city}</option>
                                        )
                                    })
                                }
                            </select>
                            <select id="inputArea" onChange={getStore} className="form-select form-select-sm  w-75 mt-2">
                                <option value="">--選擇地區--</option>
                                {
                                    area.map((area, i) => {
                                        return (
                                            <option value={area} key={i}>{area}</option>
                                        )
                                    })
                                }
                            </select>
                            <select id="inputStore" onChange={getCupValue} className="form-select form-select-sm w-50 mt-2">
                                <option value="">--選擇店家--</option>
                                {
                                    store.map((store, i) => {
                                        return (
                                            <option value={store} key={i}>{store}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className="pt-2">
                                篩選結果：總共有{num[0]?.length == 0 ? 752 : num[0]?.length}家
                            </div>
                        </form>
                    </div>
                    <div className="overflow-scroll bg-light" id="allStore">
                        {
                            data.map((item) => {
                                if (item.cupName === "好盒器") {
                                    item.cupNameColor = "good-style"
                                } else if (item.cupName === "OPENiECO") {
                                    item.cupNameColor = "open-style"
                                } else if (item.cupName === "塑還真") {
                                    item.cupNameColor = "plastic-style"
                                } else if (item.cupName === "uCup") {
                                    item.cupNameColor = "ucup-style"
                                } else {
                                    item.cupNameColor = "other-style"
                                }
                            })
                        }
                        {
                            data.map((item) => {
                                if (card.city === item.city && card.area === item.area && card.store === item.company) {
                                    return (
                                        <div className="card" key={item.name}>
                                            <div className="card-body">
                                                <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                                <h5 className="card-title mb-3">{item.name}</h5>
                                                <p className="card-text">電話：{item.tel}</p>
                                                <p><a href="#" onClick={goToLocation} data-long={item.long} data-lat={item.lat} className="link-dark stretched-link link-default">地址：{item.address}</a></p>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (card.city === item.city && card.area === item.area && card.store === "") {
                                    return (
                                        <div className="card" key={item.name}>
                                            <div className="card-body">
                                                <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                                <h5 className="card-title mb-3">{item.name}</h5>
                                                <p className="card-text">電話：{item.tel}</p>
                                                <p><a href="#" onClick={goToLocation} data-long={item.long} data-lat={item.lat} className="link-dark stretched-link link-default">地址：{item.address}</a></p>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (card.city === item.city && card.area === "" && card.store === "") {
                                    return (
                                        <div className="card" key={item.name}>
                                            <div className="card-body">
                                                <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                                <h5 className="card-title mb-3">{item.name}</h5>
                                                <p className="card-text">電話：{item.tel}</p>
                                                <p><a href="#" onClick={goToLocation} data-long={item.long} data-lat={item.lat} className="link-dark stretched-link link-default">地址：{item.address}</a></p>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (card.city === "" && card.area === "" && card.store === "") {
                                    return (
                                        <div className="card" key={item.name}>
                                            <div className="card-body">
                                                <span className={`badge rounded-pill map-span ${item.cupNameColor}`}>{item.cupName}</span>
                                                <h5 className="card-title mb-3">{item.name}</h5>
                                                <p className="card-text">電話：{item.tel}</p>
                                                <p><a href="#" onClick={goToLocation} data-long={item.long} data-lat={item.lat} className="link-dark stretched-link link-default">地址：{item.address}</a></p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <label htmlFor="sideMenu-active">
                        <i><FontAwesomeIcon icon={faAngleRight} /></i>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Map;