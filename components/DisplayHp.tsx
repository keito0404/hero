type Props = {
  hp: number;
};

const DisplayHp = (props: Props) => {
  let hpBar = "w-full";
  const hp = props.hp;

  if (hp == 0) {
    hpBar = "hidden"; //何かあったら黒にする
  } else if (hp == 20) {
    hpBar = "w-1/5";
  } else if (hp == 40) {
    hpBar = "w-2/5";
  } else if (hp == 60) {
    hpBar = "w-3/5";
  } else if (hp == 80) {
    hpBar = "w-4/5";
  } else if (hp == 100) {
    hpBar = "w-full";
  }

  return (
    <div className="flex justify-center">
      <div className="m-3 p-3 w-4/5 bg-black flex px-3.5 border-2 border-white">
        <div className={`p-3 ${hpBar} bg-white transition-all`}></div>
      </div>
    </div>
  );
};

export default DisplayHp;
