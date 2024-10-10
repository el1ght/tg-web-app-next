"use client"

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {
    return (
        <div className={"p-5 h-[100vh] relative shadow-md w-full bg-white overflow-y-auto rounded-3xl"}>
            {children}
        </div>
    );
};

export default Content;