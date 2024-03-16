"use client";
import { Fragment, type ReactNode, useEffect, useMemo } from "react";
import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { useRouter } from "next/navigation";
import { getTale } from "@/server/actions/TaleServices/getTale";
import { useQuery } from "@tanstack/react-query";
import { GET_ONE_TALE } from "@/server/actions/queryNaming";
import Image from "next/image";

const FairyTale = ({ params }: { params: { id: string } }): ReactNode => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  useEffect(() => {
    onOpen();
  }, []);

  const {
    data: taleData,
    status,
    error,
  } = useQuery({
    queryKey: [GET_ONE_TALE, params.id],
    queryFn: () => getTale(params.id),
    enabled: Boolean(params.id),
  });

  const tale = useMemo(() => {
    if (taleData) {
      return taleData;
    }
    return null;
  }, [taleData]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }

  if (!tale) {
    return <p>Tale not found</p>;
  }
  const { id, title, shortDescription, mainImage } = tale;

  const closeHandler = (): void => {
    router.back();
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={closeHandler}>
        <ModalContent>
          {(onClose) => (
            <Fragment>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>
                <Image
                  src={mainImage?.url ?? ""}
                  alt={title ?? ""}
                  width={400}
                  height={300}
                  className={"h-[300px] w-full object-cover"}
                />
                <p>{shortDescription} </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <a href={`/fairyTales/${id}`} className={"text-primary-500"}>
                  Action
                </a>
              </ModalFooter>
            </Fragment>
          )}
        </ModalContent>
      </Modal>
  );
};

export default FairyTale;
