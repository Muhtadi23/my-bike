const Inspiration = () => {

    return (
        <div>
            <div className="p-4 gap-8 grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="p-2">
                    <div className="relative w-full pb-[56.25%] overflow-hidden">
                        <iframe className="absolute top-0 left-0 w-full h-full border-0" src="https://www.youtube.com/embed/Pn6ie1zCkZU?" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold my-2">Inspiration</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo magni ratione, iure dolorem corrupti quasi. Nemo odio illum hic maiores obcaecati delectus officia suscipit sunt placeat voluptates, sequi cupiditate. Obcaecati?</p>
                    </div>
                </div>
                <div className="p-2">
                    <div className="relative w-full pb-[56.25%] overflow-hidden">
                        <iframe className="absolute top-0 left-0 w-full h-full border-0" src="https://www.youtube.com/embed/At29oFNlrEM?si=wrHWWkXF48Uk40LX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold my-2">My Premium Rush</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo magni ratione, iure dolorem corrupti quasi. Nemo odio illum hic maiores obcaecati delectus officia suscipit sunt placeat voluptates, sequi cupiditate. Obcaecati?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inspiration;