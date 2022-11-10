const EasyMode = (props: any) => {
  return (
    <div>
      <form>
        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-400">
          呪文を選択する：
        </label>
        <select
          id="countries"
          className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={props.onChangeIncatation}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </form>
    </div>
  );
};

export default EasyMode;
