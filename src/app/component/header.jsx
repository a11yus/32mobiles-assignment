import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="flex justify-center p-7 bg-black">
        <h1 className="text-semibold text-xl order-2 rounded-xl text-white">
          Skill Courses
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <Image
          alt="banner"
          src="https://s3.ap-south-1.amazonaws.com/skill-india-dev/to_set/bannerimages/jpeg/41/f175f655-8ae1-49a5-9867-2e8d3677cf1f.jpg?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240413T140159Z&X-Amz-SignedHeaders=host&X-Amz-Expires=604800&X-Amz-Credential=AKIA3OJCFBJTPLAN4OGU%2F20240413%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=70cfe8d378cf3002d02ae368ca7aab1f3b6dbb7cfa758699d422c39ec4bc6435"
          height={300}
          width={300}
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            width: "100%",
          }}
        />
      </div>
    </>
  );
};

export default Header;
