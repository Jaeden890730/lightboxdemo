
// 開啟第一層燈箱
function LightBoxOpen(url) {

    document.getElementById("MainOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
    document.getElementById("iframe").src = url;

    // 控制menu遮罩
    parent.frames["menu"].document.getElementById("MenuOverlay").classList.add("active");
    parent.frames["menu"].document.body.style.overflow = "hidden";
}


// 開啟第二層燈箱
function LightBoxNextOpen(url) {

    if (parent.document.querySelector(".popup_content.iframe_pt")) {
        parent.document.querySelector(".popup_content.iframe_pt").classList.remove("iframe_pt");
    }

    document.getElementById("MainOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
    document.getElementById("iframe").src = url;
}

// 關閉第一層燈箱
function LightBoxClose() {
    parent.document.getElementById("MainOverlay").classList.remove("active");
    parent.document.body.style.overflow = "auto";

    // 解除menu遮罩
    parent.parent.frames["menu"].document.getElementById("MenuOverlay").classList.remove("active");
    parent.parent.frames["menu"].document.body.style.overflow = "auto";
}

// 關閉第二層燈箱
function LightBoxNextClose() {

    if (parent.parent.document.querySelector(".popup_content")) {
        parent.parent.document.querySelector(".popup_content").classList.add("iframe_pt");
    }

    parent.document.getElementById("MainOverlay").classList.remove("active");
    parent.document.body.style.overflow = "auto";
}

// X按鈕關閉燈箱
function LightBoxCloseX() {
    document.getElementById("MainOverlay").classList.remove("active");
    document.body.style.overflow = "auto";

    if (parent.document.querySelector(".popup_content")) {
        parent.document.querySelector(".popup_content").classList.add("iframe_pt");
    }

    // 解除menu遮罩
    if (parent.frames["menu"] && parent.frames["menu"].document) {
        parent.frames["menu"].document.getElementById("MenuOverlay").classList.remove("active");
        parent.frames["menu"].document.body.style.overflow = "auto";
    }
}


/**
 * 創建 Menu 遮罩
 */
function CreateMenuMask() {
    if (document.getElementById("MenuOverlay") == null) {
        let mask = document.createElement("div");
        mask.id = "MenuOverlay";
        mask.className = "popup";
        document.body.appendChild(mask);
    }
}
/**
* 創建 Main 遮罩
*/
function CreateMainMask() {
    if (document.getElementById("MainOverlay") == null) {

        //create parent div
        let mask = document.createElement("div");
        mask.id = "MainOverlay";
        mask.className = "popup";
        document.body.appendChild(mask);

        //create son div
        let lightbox = document.createElement("div");
        lightbox.className = "popup_content iframe_pt";
        mask.appendChild(lightbox);

        //create iframe
        let iframe = document.createElement("iframe");
        tt = iframe;
        iframe.id = "iframe";
        iframe.src = "";
        lightbox.appendChild(iframe);

        //create exit button
        let exit = document.createElement("div");
        exit.className = "btn_close";
        exit.innerHTML = "×";
        lightbox.appendChild(exit);


        exit.addEventListener("click", function () {
            LightBoxCloseX();
        });
    }
}