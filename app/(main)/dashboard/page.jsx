"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userNameSchema } from "@/app/lib/validators";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { updateUserName } from "@/actions/users";
import { BarLoader } from "react-spinners";

const Dashboard = () => {
  const { isLoaded, user } = useUser(userNameSchema);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userNameSchema),
  });
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  useEffect(() => {
    setValue("username", user?.username);
  }, [isLoaded]);

  const { error, loading, fn: fnUpdateUsername } = useFetch(updateUserName);

  const onSubmit = async (data) => {
    fnUpdateUsername(data.username);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName}</CardTitle>
        </CardHeader>
        {/* Latest Updates */}
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span>{origin}</span>
                <Input {...register("username")} placeholder="username" />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
              {error && (
                <p className="text-red-500 text-sm mt-1">{error?.message}</p>
              )}
            </div>
            {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
            )}
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
