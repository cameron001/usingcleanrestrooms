#include <stdio.h>
#include <stdlib.h>
#include <strings.h>
#include <sys/types.h>
#include <unistd.h>

#define MEM_SIZE (128*1024*1024) //128MB
int main(int argc, char *argv[]){
	void *p = malloc(MEM_SIZE);
	bzero(p, MEM_SIZE);
	printf("pid = %d\n",getpid());
	getchar();
	free(p);
	return 0;
}
