export function getColors(count:any) {
  var colors = [];
  
  for (var i = 0; i < count; i++) {
    // 0 ile 360 arasında rastgele bir sayı seçiyoruz (Renk Tonu)
    var hue = Math.floor(Math.random() * 360);
    // Renk kodunu oluşturup listeye ekliyoruz
    var color = "hsl(" + hue + ", 70%, 60%)";
    colors.push(color);
  }
  
  return colors;
}