import { Stack } from "react-bootstrap";

export const NavBar = () => {

    return (
        <div>
        <Stack gap={2} className="text-center">
            <h1 className="sankofa-display-regular">ROBOFRIENDS</h1>
            <div>
            <input type="text" placeholder="search for robots"/>
            </div>
        </Stack>
        <hr />
        </div>
    );
};