import { ModalWrapper } from "@/components/common/ModalWrapper";
import { useModalStore } from "@/store/useModalStore";

export default function ProcessDefinitionModal() {
  const { isOpen, openModal } = useModalStore();
  return (
    <ModalWrapper open={isOpen} onOpenChange={openModal}>
      <div>ProcessDefinitionModal</div>
    </ModalWrapper>
  );
}
