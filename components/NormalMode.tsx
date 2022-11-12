const NormalMode = (props: any) => {
  return (
    <label className=" m-5 flex  justify-center">
      <div className="m-2 text-2xl">
        <span>呪文を入力</span>
      </div>
      <div className="text-black">
        <input
          type="text"
          className="mt-1 block w-80 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder=""
          value={props.selectedWord}
          onChange={props.inputIncatation}
        />
      </div>
    </label>
  );
};

export default NormalMode;
