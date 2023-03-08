import React, { useEffect } from "react";
import "./faq.css";

const Faq = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    const toggleAccordion = (event) => {
      const itemToggle =
        event.target.getAttribute("aria-expanded") === "false"
          ? "true"
          : "false";

      items.forEach((item) => {
        item.setAttribute("aria-expanded", "false");
      });

      event.target.setAttribute("aria-expanded", itemToggle);
    };

    items.forEach((item) => item.addEventListener("click", toggleAccordion));

    return () => {
      items.forEach((item) =>
        item.removeEventListener("click", toggleAccordion)
      );
    };
  }, []);

  return (
    <div class="faq-container">
      <div class="accordion">
        <div class="accordion-item">
          <button id="accordion-button-1" aria-expanded="false">
            <span class="accordion-title">Q：要怎麼借循環杯？</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              A：消費者可先透過連鎖店家或循環杯廠商專屬 App／LINE
              官方帳號；借用時，消費者須主動告知門市店員想要使用循環杯，由店員掃瞄或自助掃杯上的
              QR code
              、可能需要先預付押金，就可以裝飲料囉，在期限內歸還環保杯，押金也會退還，相當方便。
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-2" aria-expanded="false">
            <span class="accordion-title">
              Q：循環杯可以在連鎖店範圍外使用嗎？
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              A：可以！不過不一定享有環保折扣，如早餐店、夜市、個人自營店等，由店家自行決定是否提供折扣。
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-3" aria-expanded="false">
            <span class="accordion-title">Q：忘記還循環杯怎麼辦？</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              A：如果逾期才歸還循環杯，店家將不會退還押金，還請注意在期限內歸還喔。
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-4" aria-expanded="false">
            <span class="accordion-title">
              Q：為什麼循環杯不能在任何店家歸還？
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              A：因為循環杯目前有多種提供方式，業者有自行建置，或接洽第三方業者提供循環杯服務，因此需在相同體系的循環杯服務才可以歸還。
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-5" aria-expanded="false">
            <span class="accordion-title">Q：循環杯衛生嗎？</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              A：環保署已經明文訂定《餐具清洗良好作業指引》、《循環（外借）杯良好服務指引》，明確規範業者循環杯的材質及標示、借用及歸還流程、清洗準則、檢驗、環保理念溝通、標誌申請等 6 大面向，讓消費者可以安心使用。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
