import Page from "./components/Page"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex flex-row bg-zinc-300 p-3 w-dvw h-dvh">
      <Sidebar />
      <div className="w-full overflow-y-scroll  flex flex-col items-center">
        <Page></Page>
      </div>
    </div>
  )

}

export default App
