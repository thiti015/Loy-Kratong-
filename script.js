function launchKratong() {
    const wishText = document.getElementById("wishText").value;
    
    if (!wishText.trim()) {
        alert("โปรดเขียนคำอวยพรก่อนลอยกระทง");
        return;
    }

    const river = document.getElementById("river");

    // สร้างองค์ประกอบกระทง
    const kratong = document.createElement("div");
    kratong.className = "kratong";

    // รูปภาพกระทง
    const kratongImage = document.createElement("img");
    kratongImage.src = "DB.png";
    kratong.alt = "กระทง";
    kratong.appendChild(kratongImage);

    // ข้อความคำอวยพร
    const wishParagraph = document.createElement("p");
    wishParagraph.textContent = wishText;
    kratong.appendChild(wishParagraph);

    // เพิ่มกระทงลงในแม่น้ำ
    river.appendChild(kratong);

    // เคลียร์ข้อความใน textarea หลังลอยกระทง
    document.getElementById("wishText").value = "";

    // กำหนดให้กระทงเลื่อนไปด้านข้างแบบสุ่ม
    kratong.style.left = Math.random() * 80 + "%";
    
    // กระทงลอยไปแล้วจะค่อยๆ จางหายไปหลังจาก 10 วินาที
    setTimeout(() => {
        kratong.remove();
    }, 10000);
}
