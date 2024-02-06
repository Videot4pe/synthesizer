type CollapsableCardProps = {
  label: string;
  children: any;
}

const CollapsableCard = (props: CollapsableCardProps) => {
  return (
    <div class="border p-4 m-1">
      <div class="control-board__title">{ props.label }</div>
      <hr class="my-2" />
      <div class="flex space-x-4">
        { props.children }
      </div>
    </div>
  );
}

export default CollapsableCard;