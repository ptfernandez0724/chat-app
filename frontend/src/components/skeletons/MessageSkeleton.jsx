
const MessageSkeleton = () => {
  return (
    <>
        <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
            <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-40"></div>
            <div className="skeleton h-4 w-40"></div>
            </div>
        </div>
        <div className="flex items-center gap-4 justify-end">
            <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-40"></div>
            </div>
            <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div> 
        </div>
    </>
  )
}

export default MessageSkeleton