import React from "react";
import Image from "next/image";
function index(props: any) {
  console.log(props);
  const arr = new Array(100).fill(0);

  return (
    <div>
      {arr.map((item, index) => {
        return (
          <Image
            loading="lazy"
            key={index}
            src={
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            }
            width={500}
            height={500}
          />
        );
      })}
    </div>
  );
}

export const getStaticProps = (ctx: any) => {
  return { props: { data: "abc" } };
};
export default index;
