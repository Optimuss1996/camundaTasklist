import { ModalWrapper } from "@/components/common/ModalWrapper";
import { useModalStore } from "@/store/useModalStore";

export default function ProcessDefinitionModal() {
  const { isOpen, openModal, closeModal } = useModalStore();
  return (
    <ModalWrapper open={isOpen} onOpenChange={toggleModal}>
      <div>ProcessDefinitionModal</div>
    </ModalWrapper>
  );
}
