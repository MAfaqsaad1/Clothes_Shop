
import ItemCart from "./ItemCart";
import data from "./Data";
export default function Gallery() {
    console.log(data.prouctData);
    return (

        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 justify-center">
                <h1 className="uppercase text-center text-4xl my-10">WE MAKE YOU AWESOME</h1>
                <div className="flex flex-wrap -m-1 justify-center md:-m-2">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-6">
                        {data.prouctData.map((item, index) => {
                            return (
                                <ItemCart
                                    img={item.img}
                                    title={item.title}
                                    disc={item.disc}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>


    );

}