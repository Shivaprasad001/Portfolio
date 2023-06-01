import moonIcon from '../../../../assets/icons/moon-icon.svg';

export default function ThemeToggleBtn(props) {
    return (
        <button className="toggle-theme__btn">
            <img src={moonIcon} alt="night-mode" />
        </button>
    )
}