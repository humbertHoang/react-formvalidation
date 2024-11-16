const FormSinhVien = (props) => {
  const { formikSinhVien, isEditMode } = props;
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
              disabled={isEditMode}
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
            className="hover: w-fit rounded bg-green-600 px-4 py-2 text-white"
          >
            {isEditMode ? "Cập nhật" : "Thêm sinh viên"}
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSinhVien;
