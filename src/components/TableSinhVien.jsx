import { useRef } from "react";

const TableSinhVien = (props) => {
  const { formData, handleDeleteSV, handleEditMode, handleSearchSV } = props;
  const searchInputRef = useRef(null);

  const renderTable = formData.map((item) => (
    <tr key={item.maSV}>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {item.maSV}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {item.nameSV}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {item.phoneSV}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {item.emailSV}
      </td>
      <td className="space-x-2 whitespace-nowrap px-0 py-2">
        <button
          className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          onClick={() => handleEditMode(item)}
        >
          Xem
        </button>
        <button
          className="rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
          onClick={() => {
            if (window.confirm("Bạn muốn xoá sinh viên này?")) {
              handleDeleteSV(item.maSV);
            }
          }}
        >
          Xoá
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <form className="ms-auto max-w-md">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            autoComplete="off"
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Tìm kiếm"
          />
          <button
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={(e) => {
              e.preventDefault();
              handleSearchSV(searchInputRef.current.value);
              searchInputRef.current.value = "";
            }}
          >
            Search
          </button>
        </div>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto divide-y-2 divide-gray-200">
          <thead className="bg-gray-700">
            <tr>
              <th
                className="whitespace-nowrap px-4 py-2 text-left text-lg font-medium text-white"
                scope="col"
              >
                Mã SV
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left text-lg font-medium text-white"
                scope="col"
              >
                Họ tên
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left text-lg font-medium text-white"
                scope="col"
              >
                Số điện thoại
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left text-lg font-medium text-white"
                scope="col"
              >
                Email
              </th>
              <th className="px-4 py-2" scope="col"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">{renderTable}</tbody>
        </table>
      </div>
    </>
  );
};

export default TableSinhVien;
