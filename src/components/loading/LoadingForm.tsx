import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";

function LoadingForm() {
    const lightMode = useSelector((state: RootState) => state.light.light);

    return (
        <form className={lightMode ? "lightForm" : ""} style={{ maxWidth: "584px", margin: "auto auto 50px auto" }}> 
            <center>
                <Skeleton height={37.6} width={109.85} borderRadius={8} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} style={{ marginBottom: 20 }} />
            </center>
            <Skeleton borderRadius={10} height={58.2} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
            <Skeleton borderRadius={10} height={58.2} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
            <Skeleton borderRadius={10} height={58.2} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
            <Skeleton borderRadius={10} height={300} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
            <div className="functions">
                <Skeleton height={55} width={98.85} borderRadius={8} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                <Skeleton height={55} width={113.68} borderRadius={8} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
            </div>
        </form>
    )
}

export default LoadingForm