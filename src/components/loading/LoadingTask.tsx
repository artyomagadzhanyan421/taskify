import Skeleton from 'react-loading-skeleton';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingTask() {
    const lightMode = useSelector((state: RootState) => state.light.light);

    return (
        <div className='LoadingTask'>
            <div className={lightMode ? "task lightTask" : "task"} id='readTask'>
                <Skeleton height={32.2} width={401.79} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                <Skeleton height={30} width={232} borderRadius={6} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} style={{ marginTop: 18, marginBottom: 20 }} />
                <Skeleton height={20} count={3} borderRadius={3} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
                <Skeleton height={20} width={200} borderRadius={3} baseColor={lightMode ? "#E4E4E7" : "#3F3F46"} highlightColor={lightMode ? "#D4D4D8" : "#52525B"} />
            </div>
        </div>
    )
}

export default LoadingTask