let name = prompt("Hãy nhập tên của bạn đi bạn trẻ: ")
let old = prompt('Hãy nhập tuổi của bạn đi bạn trẻ: ')
let y = new Date()
let year = y.getFullYear()-old
function tinhCanChi(year) {
  const can = year % 10;
  const chi = year % 12;

  let canChiStr = "";

  switch (can) {
    case 0:
      canChiStr += "Canh";
      break;
    case 1:
      canChiStr += "Tân";
      break;
    case 2:
      canChiStr += "Nhâm";
      break;
    case 3:
      canChiStr += "Quý";
      break;
    case 4:
      canChiStr += "Giáp";
      break;
    case 5:
      canChiStr += "Ất";
      break;
    case 6:
      canChiStr += "Bính";
      break;
    case 7:
      canChiStr += "Đinh";
      break;
    case 8:
      canChiStr += "Mậu";
      break;
    case 9:
      canChiStr += "Kỷ";
      break;
  }

  canChiStr += " ";

  switch (chi) {
    case 0:
      canChiStr += "Thân";
      break;
    case 1:
      canChiStr += "Dậu";
      break;
    case 2:
      canChiStr += "Tuất";
      break;
    case 3:
      canChiStr += "Hợi";
      break;
    case 4:
      canChiStr += "Tý";
      break;
    case 5:
      canChiStr += "Sửu";
      break;
    case 6:
      canChiStr += "Dần";
      break;
    case 7:
      canChiStr += "Mão";
      break;
    case 8:
      canChiStr += "Thìn";
      break;
    case 9:
      canChiStr += "Tỵ";
      break;
    case 10:
      canChiStr += "Ngọ";
      break;
    case 11:
      canChiStr += "Mùi";
      break;
  }
  return canChiStr;
}

function ktraNamNhuan(y){
  let nam = "";
  if (y%4==0 || y%100==0 || y%400==0)
  {
    nam += "năm nhuận";
  }
  else {nam += "năm không nhuận";} 
  return nam;
}

console.log("Chào mừng "+name+", bạn "+old+" tuổi,"+ "sinh năm "+year);
console.log("Đây là năm "+ tinhCanChi(year) +" và đây là " + ktraNamNhuan(year));