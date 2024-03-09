package denc

import (
	"strings"
	"testing"
)

func TestEncrypt(t *testing.T) {
	t.Log("testing encrypt function")
	s := "test"
	d := encrypt(s)
	if strings.Compare("test", decrypt(d)) != 0 {
		t.Fail()
	}
}
