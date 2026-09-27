import Page from "./components/Page"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex flex-row bg-zinc-200 w-dvw h-dvh">
      <Sidebar />
      <div className="w-full overflow-y-scroll p-3 flex flex-col items-center">
        <Page />
      </div>
    </div>
  )

}

export default App
