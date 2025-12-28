import FigmaEmbed from '../../components/FigmaEmbed';

export default function Design() {
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-8">Tio Waldner's Burger Design</h1>
            <FigmaEmbed
                url="https://www.figma.com/design/E4Z3EsLNTKbKxcFUSmC46s/Tio-Waldner%C2%B4s-Burger?node-id=0-1&m=dev&t=JTVRcc9cvI47tVX6-1"
                width="100%"
                height="800px"
            />
        </div>
    );
}