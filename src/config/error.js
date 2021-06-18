import { ProductSize } from "../models/core";

export const ERROR_MESSAGE = {
    LOGIN: {
        ERR_ACC: 'Tài khoản không tồn tại!',
        ERR_PASS: 'Mật khẩu không đúng',
        ERR_STATUS: 'Tài khoản không được phép đăng nhập',
        ERR_REQUIRE_EMAIL: 'Vui lòng cung cấp thông tin đăng nhập',
        ERR_REQUIRE_PASSWORD: 'Vui lòng cung cấp mật khẩu'
    },
    USER:{
        ERR_SEARCH_NOT_FOUND: 'Không tìm thấy',
        ERR_REQUIRE_INPUT: 'Cần nhập đầy đủ dữ liệu',
        ERR_EXIST:'Người dùng đã tồn tại!',
    },
    PRODUCTMANUFACTURER:{
        ERR_REQUIRE_INPUT:"Cần nhập đầy đủ dữ liệu",
        ERR_EXIST:'Tên nhà sản xuất đã tồn tại!',
        ERR_SEARCH_NOT_FOUND: 'Không tìm thấy',
    },
    SIZE:{
        ERR_REQUIRE_INPUT:"Cần nhập đầy đủ dữ liệu",
        ERR_EXIST:'size này đã tồn tại!',
        ERR_SEARCH_NOT_FOUND: 'Không tìm thấy',
        ERR_TYPE: 'Cần chọn kiểu cho size',
    },
    PRODUCT:{
        ERR_REQUIRE_INPUT:"Cần nhập đầy đủ dữ liệu",
        ERR_EXIST:'Sản phẩm này đã tồn tại!',
        ERR_SEARCH_NOT_FOUND: 'Không tìm thấy',
        ERR_TYPE: 'Cần chọn kiểu cho size',
    },
    ORDER:{
        ERR_REQUIRE_INPUT:"Cần nhập đầy đủ dữ liệu",
        ERR_EXIST:'Đơn hàng này đã tồn tại!',
        ERR_SEARCH_NOT_FOUND: 'Không tìm thấy',
        ERR_TYPE: 'Cần chọn kiểu cho size',
    }
}