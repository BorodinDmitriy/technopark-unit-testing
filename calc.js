module.exports = class Calculator {

  static add(a, b) {
    return (+a) + (+b);
  }

  static subtract(a, b) {
    return (+a) - (+b);
  }
  
  static multiply(a, b) {
    return (+a) * (+b);
  }
  
  static divide(a, b) {
    if (b == 0) {
      throw Error('На ноль делить нельзя!');
    }
    return (+a) / (+b);
  }

  static isNumeric(a, b) {
    // Метод isNaN пытается преобразовать переданный параметр в число. 
    // Если параметр не может быть преобразован, возвращает true, иначе возвращает false.
    // isNaN("12") // false 
    if ((!isNaN(parseFloat(a)) && isFinite(a)) && 
       (!isNaN(parseFloat(b)) && isFinite(b))) {
      return true;
    }
    return false;
  }

};