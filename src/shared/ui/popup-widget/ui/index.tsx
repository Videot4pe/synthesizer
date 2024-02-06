type PopupWidgetProps = {
  children: any;
  label: string;
  id: string;
}

const PopupWidget = (props: PopupWidgetProps) => {
  
  return (
    <>
      <div data-modal-target={props.id} data-modal-toggle={props.id} class="border rounded p-2 m-1 popup-widget__title cursor-pointer">
        { props.label }
      </div>
      <div id={props.id} tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        {/*<div class="relative p-4 w-full max-w-md max-h-full">*/}
          <div class="relative bg-red-600 rounded-lg shadow">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={props.id}>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              { props.children }
            </div>
          </div>
        {/*</div>*/}
      </div>
    </>
  )
}

export default PopupWidget;