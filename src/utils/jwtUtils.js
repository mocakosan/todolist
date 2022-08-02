import jwtDecode from "jwt-decode";

export class jwtUtils {
  // 토큰 유효성 검사
  static isValid(token) {
    if (!token) {
      return false;
    } else {
      try {
        const decoded = jwtDecode(token);
        if (decoded.EXPIRED_DATE > new Date().getTime() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
  }
}
