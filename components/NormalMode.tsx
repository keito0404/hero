const NormalMode = (props: any) => {
  return (
    <div>
      <p>ノーマルモード</p>
      <label className="block">
        <span>呪文を入力</span>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder=""
          onChange={props.inputIncatation}
        />
      </label>
    </div>
  );
};

export default NormalMode;
