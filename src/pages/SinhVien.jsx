import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormSinhVien from "../components/FormSinhVien.jsx";
import TableSinhVien from "../components/TableSinhVien.jsx";
const SinhVien = () => {
  const [formData, setFormData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const handleAddSV = (values) => {
    const newSV = {
      maSV: values.maSV,
      nameSV: values.nameSV,
      phoneSV: values.phoneSV,
      emailSV: values.emailSV,
    };
    setFormData((fd) => [...fd, newSV]);
    setOriginalData((od) => [...od, newSV]);
    setIsEditMode(false);
  };
  const handleDeleteSV = (maSV) => {
    setFormData((fd) => fd.filter((item) => item.maSV !== maSV));
    setOriginalData((od) => od.filter((item) => item.maSV !== maSV));
  };
  const handleEditMode = (values) => {
    formikSinhVien.setValues(values);
    setIsEditMode(true);
  };
  const handleUpdateSV = (values) => {
    setFormData((fd) =>
      fd.map((item) => (item.maSV === values.maSV ? values : item)),
    );
    setOriginalData((od) =>
      od.map((item) => (item.maSV === values.maSV ? values : item)),
    );
    setIsEditMode(false);
  };
  const handleSearchSV = (values) => {
    if (values === "") {
      setFormData(originalData);
    } else {
      setFormData(
        originalData.filter(
          ({ maSV, nameSV, phoneSV, emailSV }) =>
            maSV === values ||
            nameSV === values ||
            phoneSV === values ||
            emailSV === values,
        ),
      );
    }
  };
  const formikSinhVien = useFormik({
    initialValues: {
      maSV: "",
      nameSV: "",
      phoneSV: "",
      emailSV: "",
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
        if (isEditMode) {
          handleUpdateSV(values);
        } else {
          handleAddSV(values);
        }
      }
      formikSinhVien.resetForm();
    },
  });
  return (
    <div className="container m-auto space-y-3">
      <FormSinhVien formikSinhVien={formikSinhVien} isEditMode={isEditMode} />
      <TableSinhVien
        formData={formData}
        handleDeleteSV={handleDeleteSV}
        handleEditMode={handleEditMode}
        handleSearchSV={handleSearchSV}
      />
    </div>
  );
};

export default SinhVien;
