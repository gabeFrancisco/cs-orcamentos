import Modal from "./components/Modal"
import Page from "./components/Page"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="flex flex-row bg-zinc-200 w-dvw h-dvh">
      <Modal />
      <Sidebar />
      <div className="w-full overflow-y-scroll p-3 flex flex-col items-center">
        <Page />
      </div>
    </div>
  )

}

export default App
