$(document).ready(function () {

  function format(id, value) {
    count = value.length;
    header = count.toString().padStart(2, '0');
    return id + header + value;
  }

  function generateString() {
    let paymentType;
    let makeDesTo;
    let destination = "0909845370";
    let amount = "0";

    destination = destination.replace(/\D/g, '');

    if (destination.length >= 15) {
      paymentType = "03";
      makeDesTo = (destination.replace(/^0/, '')).padStart(13, '0');
    }
    else if (destination.length >= 13) {
      paymentType = "02";
      makeDesTo = destination;
    }
    else {
      paymentType = "01";
      makeDesTo = ('66' + destination.replace(/^0/, '')).padStart(13, '0');
    }

    let data = [
      format("00", "01"),
      format("01", amount > 0 ? "12" : "11"),
      format("29", format("00", "A000000677010111") + format(paymentType, makeDesTo)),
      format("58", "TH"),
      format("53", "764")
    ];

    if (amount > 0) {
      data.push(format("54", amount.toFixed(2)));
    }

    data = data.join('') + "6304";
    return data + crc16(data).toUpperCase();
  }

  function crc16(data) {
    let crc = 0xFFFF;
    for (let i = 0; i < data.length; i++) {
      crc ^= data.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
      }
    }
    return (crc & 0xFFFF).toString(16).padStart(4, '0');
  }

  function makeQR(qrData) {
    $("#output").empty();

    let qrCode = new QRCode($('#output')[0], {
      text: qrData,
      width: 250,
      height: 250,
      colorLight: "#271e21",
      colorDark: "#d1d0d0"
    });
  }

  $('#Donate').on('shown.bs.modal', function () {
    let qrData = generateString();
    makeQR(qrData);
  });

});