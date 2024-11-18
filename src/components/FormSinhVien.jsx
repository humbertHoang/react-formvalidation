import { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { addSV, updateSV } from "../redux/reducers/sinhvienSlice.jsx";
import { clearSelectedSV } from "../redux/reducers/isEditModeSlice";
const FormSinhVien = () => {
  const dispatch = useDispatch();
  const selectedSV = useSelector((state) => state.isEditMode);
  const formikSinhVien = useFormik({
    initialValues: {
      maSV: selectedSV ? selectedSV.maSV : "",
      nameSV: selectedSV ? selectedSV.nameSV : "",
      phoneSV: selectedSV ? selectedSV.phoneSV : "",
      emailSV: selectedSV ? selectedSV.emailSV : "",
    },
    validationSchema: Yup.object({
      maSV: Yup.string()
        .matches(/^[0-9]{1,8}$/, "Mã sinh viên không đúng định dạng")
        .required("Mã sinh viên không được để trống"),
      nameSV: Yup.string()
        .matches(
          /^[A-ZÀ-ỹ][a-zà-ỹ]*( [A-ZÀ-ỹ][a-zà-ỹ]*)+$|^[A-ZÀ-ỹ][a-zà-ỹ]* [A-ZÀ-ỹ][a-zà-ỹ]*$/,
          "Họ tên không đúng định dạng",
        )
        .required("Họ tên không được để trống"),
      phoneSV: Yup.string()
        .matches(
          /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
          "Số điện thoại không đúng định dạng",
        )
        .required("Số điện thoại không được để trống"),
      emailSV: Yup.string()
        .email("Email không đúng định dạng")
        .required("Email không được để trống"),
    }),
    onSubmit: (values) => {
      if (formikSinhVien.isValid) {
        if (selectedSV) {
          dispatch(updateSV(values));
          dispatch(clearSelectedSV());
        } else {
          dispatch(addSV(values));
        }
      }
      formikSinhVien.resetForm();
    },
  });
  useEffect(() => {
    if (selectedSV) {
      formikSinhVien.setValues(selectedSV);
    }
  }, [selectedSV]);
  return (
    <>
      <h2 className="bg-gray-700 p-2 text-2xl font-bold text-white">
        Thông tin sinh viên
      </h2>
      <form onSubmit={formikSinhVien.handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="maSV" className="block font-medium">
              Mã SV
            </label>
            <input
              type="text"
              id="maSV"
              name="maSV"
              className="w-full rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 disabled:bg-gray-200 sm:text-sm/6"
              value={formikSinhVien.values.maSV}
              onChange={formikSinhVien.handleChange}
              onBlur={formikSinhVien.handleBlur}
              disabled={selectedSV}
            />
            {formikSinhVien.touched.maSV && formikSinhVien.errors.maSV ? (
              <p className="text-red-500">{formikSinhVien.errors.maSV}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nameSV" className="block font-medium">
              Họ tên
            </label>
            <input
              type="text"
              id="nameSV"
              name="nameSV"
              className="w-full rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              value={formikSinhVien.values.nameSV}
              onChange={formikSinhVien.handleChange}
              onBlur={formikSinhVien.handleBlur}
            />
            {formikSinhVien.touched.nameSV && formikSinhVien.errors.nameSV ? (
              <p className="text-red-500">{formikSinhVien.errors.nameSV}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phoneSV" className="block font-medium">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phoneSV"
              name="phoneSV"
              className="w-full rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              value={formikSinhVien.values.phoneSV}
              onChange={formikSinhVien.handleChange}
              onBlur={formikSinhVien.handleBlur}
            />
            {formikSinhVien.touched.phoneSV && formikSinhVien.errors.phoneSV ? (
              <p className="text-red-500">{formikSinhVien.errors.phoneSV}</p>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="emailSV" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="emailSV"
              name="emailSV"
              className="w-full rounded-md border-0 px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm/6"
              value={formikSinhVien.values.emailSV}
              onChange={formikSinhVien.handleChange}
              onBlur={formikSinhVien.handleBlur}
            />
            {formikSinhVien.touched.emailSV && formikSinhVien.errors.emailSV ? (
              <p className="text-red-500">{formikSinhVien.errors.emailSV}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-fit rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            {selectedSV ? "Cập nhật" : "Thêm sinh viên"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSinhVien;
