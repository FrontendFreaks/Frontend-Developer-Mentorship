import Image from "next/image"
const Banner = ({ src }) => {
    return (
        <div className="relative w-full ">
            <Image
                src={src}
                width={2000}
                quality={100}
                height={400}
            />
        </div>
    )
}

export default Banner