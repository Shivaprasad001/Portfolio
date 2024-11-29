import { DESIGNS } from "./constants";

export default function DesignList() {
    return (
        <div className="projects-page__design-list">
            {
                DESIGNS.map()
            }
        </div>
    )
}