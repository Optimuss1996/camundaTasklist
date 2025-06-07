const shortcuts = [
  { keys: "Ctrl + Alt + C", desc: "اختصاص وظیفه انتخاب‌شده" },
  { keys: "Ctrl + Shift + F", desc: "رفتن به اولین فیلتر در لیست" },
  { keys: "Ctrl + Alt + L", desc: "رفتن به اولین تسک در لیست" },
  { keys: "Ctrl + Alt + F", desc: "رفتن به اولین فیلد ورودی در فرم تسک" },
  { keys: "Ctrl + Alt + P", desc: "باز کردن مودال شروع فرآیند" },
];

export function ShortCuts() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-md p-4">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-right text-gray-700">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 border-b">کلید میانبر</th>
              <th className="p-3 border-b">توضیح</th>
            </tr>
          </thead>
          <tbody>
            {shortcuts.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 border-b font-mono text-blue-600">
                  {item.keys}
                </td>
                <td className="p-3 border-b">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
