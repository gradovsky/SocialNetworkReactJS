import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="SocialReactJs" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SocialReactJs");
    });
});