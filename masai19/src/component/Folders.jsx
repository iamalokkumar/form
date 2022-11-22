import React, { useState } from "react";

const Folders = ({ elem, obj }) => {
  let [arr, setArr] = useState([]);
  let [sec,setSec]=useState(false)
  let [node,setNode]=useState(1)
  let fileFunc = () => {
    obj.items.map((e) => {
        setNode(node+1)
      setArr([...e.items]);
      setSec(true)
    });
   
  };
  return (
    <div>
      <div style={{ width: "150px", marginLeft: "50%", display: "flex" }}>
        {sec ?  <img
          src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
          alt=""
          style={{
            height: "15px",
            width: "15px",
            marginTop: "25px",
            marginRight: "10px",
          }}
          onClick={fileFunc}
        /> :  <img
        src="  https://cdn-icons-png.flaticon.com/512/32/32213.png"
        alt=""
        style={{
          height: "15px",
          width: "15px",
          marginTop: "25px",
          marginRight: "10px",
        }}
        onClick={fileFunc}
      />}
       
        <img
          src="https://icon-library.com/images/transparent-folder-icon/transparent-folder-icon-22.jpg"
          alt=""
          style={{
            height: "23px",
            width: "23px",
            marginTop: "25px",
            marginRight: "10px",
          }}
          onClick={fileFunc}
        />
        <h3 style={{ color: "red", marginLeft: "10%" }} onClick={fileFunc}>
          {elem.name}
        </h3>
        </div>
        { node %2==0 ? arr.map((el) => (
          <div style={{display:"flex",marginLeft:"50%"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/File_alt_font_awesome.svg/1024px-File_alt_font_awesome.svg.png" alt="" style={{height:"23px",width:"23px",marginTop:"25px",marginRight:"10px"}} />
            <h3>{el}</h3>
          </div>
        )) : []}
        <div></div>
     
    </div>
  );
};

export default Folders;
