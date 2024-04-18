import React from "react";

const Shade = (props) => {
  const { shadeData, setShade } = props;
  return (
    <>
      <ul className="shades ps-0 list-unstyled ">
        {shadeData &&
          shadeData?.map((item, index) => {
            return (
              <li
                onClick={() => setShade(item?._id)}
                style={{
                  backgroundColor: item?.title,
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  border: "2px solid rgb(231 231 231)",
                }}
                key={index}
              ></li>
            );
          })}
      </ul>
    </>
  );
};

export default Shade;
