'use client'

import Modal from '../ui/modal'
import { useStoreModal } from '@/hooks/use-store-modal'

export default function StoreModal() {
  const storeModal = useStoreModal()
  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage your products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  )
}
