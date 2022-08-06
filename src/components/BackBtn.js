import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

export default function BackBtn({page}) {
    return (
            <div className="resourceBack">
                <span><KeyboardArrowLeftRoundedIcon /></span>
                <p>{page}</p>
            </div>    
    )
}

