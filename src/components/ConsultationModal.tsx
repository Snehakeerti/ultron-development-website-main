import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0K5fDyJvN0SSdFtG9N3NBszUxVK0BkCadVWb6xwcWTHPCFsSi_SnhkaAELt2Con4RAA/exec";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  serviceOptions: string[];
}

const ConsultationModal = ({
  open,
  setOpen,
  serviceOptions,
}: Props) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    device: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      toast({
        title: "Error",
        description: "Please fill required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) =>
      data.append(key, value)
    );

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: data,
      });

      setOpen(false);
      navigate("/thank-you");

    } catch {
      toast({
        title: "Error",
        description: "Please try again later",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">

        <DialogHeader>
          <DialogTitle>
            Get Free Consultation
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4"
        >
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <Input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
          />

          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <select
            className="w-full border rounded-md h-10 px-3"
            value={form.service}
            onChange={(e) =>
              setForm({
                ...form,
                service: e.target.value,
              })
            }
          >
            <option>Select Service</option>

            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <Input
            placeholder="Device model"
            value={form.device}
            onChange={(e) =>
              setForm({
                ...form,
                device: e.target.value,
              })
            }
          />

          <Textarea
            placeholder="Describe problem"
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            <Send size={16} />

            {isSubmitting
              ? "Sending..."
              : "Send Message"}
          </Button>

        </form>

      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;