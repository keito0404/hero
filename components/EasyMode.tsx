const EasyMode = (props: any) => {
  return (
    <form className="m-6 flex  justify-center">
      <label className="text-2xl m-2 font-medium text-white dark:text-gray-400 ">
        呪文を選択する
      </label>

      <select
        id="countries"
        className="w-80  bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
        onChange={props.onChangeIncatation}
      >
        <option value="メガンテ">メガンテ</option>
        <option value="バルプンテ">バルプンテ</option>
        <option value="アストロン">アストロン</option>
        <option value="ステルス">ステルス</option>
        <option value="ヴェレノーマ">ヴェレノーマ</option>
      </select>
    </form>
  );
};

export default EasyMode;
