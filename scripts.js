const files = [
  { file: "mods/lightmeka_1.0_ko.zip", image: "images/lightmeka_1.0_ko.png" },
  { file: "mods/lightmeka_1.1_ko.zip", image: "images/lightmeka_1.1_ko.png" },
  { file: "mods/lightmeka_1.2_ko.zip", image: "images/lightmeka_1.2_ko.png" }
];

const select = document.getElementById("version-select");
const img = document.getElementById("preview-image");
const downloadBtn = document.getElementById("download-btn");

// 버전 선택 시 이미지 업데이트
select.addEventListener("change", () => {
  const index = select.value;
  img.src = files[index].image;
});

// 다운로드 버튼 클릭 시 해당 버전 파일 다운로드
downloadBtn.addEventListener("click", () => {
  const index = select.value;
  const link = document.createElement("a");
  link.href = files[index].file;
  link.download = files[index].file.split("/").pop();
  link.click();
});
