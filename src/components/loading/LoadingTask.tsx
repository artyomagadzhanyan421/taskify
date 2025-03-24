import Skeleton from 'react-loading-skeleton';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingTask() {
    const lightMode = useSelector((state: RootState) => state.light.light);

    return (
        <div className='LoadingTask'>
            <div className={lightMode ? "task lightTask" : "task"} style={{ width: "584px", margin: "0px 0px 50px 0px" }}>
                <Skeleton height={32.2} width={401.79} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                <Skeleton height={30} width={234.33} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} style={{ marginTop: 18, marginBottom: 20 }} />
                <Skeleton height={20} count={3} borderRadius={3} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                <Skeleton height={20} width={200} borderRadius={3} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                <div className="functions" style={{ marginTop: 20 }}>
                    <Skeleton height={55} width={216.7} borderRadius={8} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                </div>
            </div>
        </div>
    )
}

export default LoadingTask;