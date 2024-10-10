"use client"

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {
    return (
        <div className={"h-[100vh] relative shadow-md w-full bg-white overflow-y-auto rounded-3xl"}>
            {children}
        </div>
    );
};

export default Content;