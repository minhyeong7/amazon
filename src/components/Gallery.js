import { useState } from "react";

const PHOTOS = [
   "https://m.lguplus.com/static/pc-contents/images/prdv/20240910-100321-417-AAod0Y5I.png",
   "https://image.shop.kt.com/upload/product/WL00067977/1722385667246.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTBRc6KV-eBSQC88XSrPebqxWyOtPJqsJ0w&s",
]

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const firstIndex = 0;
  const lastIndex = PHOTOS.length - 1;

  return (
    <>
      <div className="mx-auto w-inherit h-80 border relative flex justify-center">
        {/* 사진 */}
        <img 
            className="h-full object-cover"
            src={PHOTOS[index]}
            alt={PHOTOS[index]}
          />

        {/* 이전 버튼 */}
        {(index != firstIndex) && (
          <button
            className="absolute top-0 left-0 h-full px-2 text-4xl text-gray-400"
            onClick={() => setIndex(index - 1)}
          >
            &#10094;
          </button>
        )}

        {/* 다음 버튼 */}
        {(index != lastIndex) && (
          <button
            className="absolute top-0 right-0 h-full px-2 text-4xl text-gray-400"
            onClick={() => setIndex(index + 1)}
          >
            &#10095;
          </button>
        )}
        
      </div>

      {/* 인디케이터 */}
      <div className="flex justify-center my-4">
        {/* dotIndex = 0,1,2 */}
        {PHOTOS.map((photo, dotIndex) => (
          <span
            key={dotIndex}
            className="w-2 h-2 mx-1 rounded-full bg-gray-200"
            style={{ 
              backgroundColor: (index == dotIndex) && "orange"
            }}
          >
          </span>
        ))}
      </div>
    </>
  )
}